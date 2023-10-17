import tkinter as tk
import turtle, random

# 게임 진행 클래스
class RunawayGame:
    def __init__(self, canvas, mode, time, catch_radius = 30):
        self.time = time
        self.canvas = canvas
        self.runner = RandomMover(screen, self.time)
        self.chaser = ManualMover(screen, self.time)
        self.catch_radius2 = catch_radius**2
        self.speed_start_time = 0
        self.mode = mode

        # 아이템 리스트
        self.item_list = []

        # 거북이 초기화
        self.runner.shape("turtle")
        self.runner.color("#008299")
        self.runner.penup()
        self.chaser.shape("turtle")
        self.chaser.color("#6B9900")
        self.chaser.penup()

        # 스코어 인스턴스
        self.score = Score(screen)

        # 공격 이벤트 핸들러
        canvas.onkey(lambda: self.attack(), 'space')

    # 모드 확인
    def mode_run(self) :
        if self.mode == "easy" :
            self.runner.run_ai()
        elif self.mode == "hard" :
            self.runner.run_smart_ai(self.chaser.pos(), self.chaser.heading())

    # 인스턴스 가까워졌는지 판별
    def is_catched(self, a, b):
        p = a.pos()
        q = b.pos()
        dx, dy = p[0] - q[0], p[1] - q[1]
        return dx**2 + dy**2 < self.catch_radius2
    
    # 거북이 공격 여부 판별
    def attack(self) :
        if self.is_catched(self.runner, self.chaser) :
            self.runner.attacked()

    # 아이템 획득 여부 판별 후 기능 적용
    def is_item_catched(self) :
        for item in self.item_list :
            if self.is_catched(item.drawer, self.chaser) and item.drawer.isvisible():
                item.item_func()

    # 아이템 랜덤 생성기
    def item_random_genergator(self) :
        random_number = random.random()
        if random_number < 0.03:
           self.item_list.append(ItemApple(self))
           self.item_list[-1].item_generate()
        elif random_number < 0.035:
           self.item_list.append(ItemSpeed(self))
           self.item_list[-1].item_generate()

    # 스피드 아이템 지속 시간 제어
    def speed_control(self) :
        if self.time.current_time == self.speed_start_time - 10 :
            self.chaser.original_state()

    # 시작할 때 거북이 위치
    def start(self, init_dist = 400, ai_timer_msec = 50):
        self.runner.setpos((-init_dist / 2, 0))
        self.runner.setheading(0)
        self.chaser.setpos((+init_dist / 2, 0))
        self.chaser.setheading(180)

        self.ai_timer_msec = ai_timer_msec
        self.canvas.ontimer(self.step, self.ai_timer_msec)

    # 반복
    def step(self):
        self.score.score_draw() # 점수 확인 후 갱신
        
        # 게임이 종료되었을 경우 아래 함수 더이상 실행 X
        if (not self.time.game_over.is_gameover) and (not self.runner.win.is_win) :
            self.mode_run()
            self.item_random_genergator()
            self.is_item_catched()
            self.speed_control()
        else :
            self.runner.win.time_stop()
            self.score.total_draw(self.time)    # 게임이 종료되면 최종 스코어 계산
    
        self.canvas.ontimer(self.step, self.ai_timer_msec)

# 게임 오버 클래스
class GameOver :
    def __init__(self, time, canvas) :
        self.time = time
        self.canvas = canvas
        self.is_gameover = False
        self.ai_timer_msec = 100
        self.score = 0

        self.drawer = turtle.RawTurtle(self.canvas)
        self.drawer.hideturtle()
        self.drawer.penup()      
        self.drawer.setpos(0, 0) 

    # 게임 오버 (실패) 화면
    def draw_end_screen(self) :
        self.drawer.shape("image/fail.gif")
        self.drawer.showturtle()

# Win 클래스
class Win :
    def __init__(self, runner, time, canvas) :
        self.runner = runner
        self.time = time
        self.is_win = False
        self.canvas = canvas
        self.time_score = 0

        self.drawer = turtle.RawTurtle(self.canvas)
        self.drawer.hideturtle()
        self.drawer.penup()      
        self.drawer.setpos(0, 0)

    # win (성공) 화면
    def draw_end_screen(self) :
        self.is_win = True
        self.drawer.shape("image/success.gif")
        self.drawer.showturtle()

    def set_score(self) :
        self.time_score = self.time.current_time

    def time_stop(self) :
        if self.is_win :
            self.time.game_over.is_gameover = True

# 타이머 클래스
class Timer(tk.Frame) :
    def __init__(self, canvas):
        self.canvas = canvas
        self.running = True
        self.initial_time = 60  # 초기 시간 60초
        self.current_time = self.initial_time
        self.fisrt_time = 0
        self.second_time = 0

        self.drawer = turtle.RawTurtle(self.canvas)
        self.drawer.color("#4B4B4B")
        self.drawer.hideturtle()
        self.drawer.penup()

        # 게임 오버 인스턴스
        self.game_over = GameOver(self, canvas)

    def update_time(self):
        self.current_time -= 1
        if self.current_time <= -0.5:
            self.game_over.is_gameover = True
            self.current_time = 0
            self.game_over.draw_end_screen()
        else:
            self.time_set() 
    
        if not self.game_over.is_gameover :
            self.canvas.ontimer(self.update_time, 1000)

    def time_set(self) :
        self.drawer.undo()
        self.drawer.penup()
        self.drawer.setpos(200, 190)
        self.drawer.write(self.current_time, font=("Arial", 23, "bold"))

    def time_score(self) :
        return self.current_time * 10

# 점수 클래스
class Score :
    def __init__(self, canvas) :
        self.current_score = 0
        self.canvas = canvas
        self.total_score = 0
        self.is_total_done = False
        self.draw_score = self.current_score

        self.drawer = turtle.RawTurtle(self.canvas)
        self.drawer.color("#4B4B4B")
        self.drawer.hideturtle()
        self.drawer.penup()

    def score_draw(self) :
        self.drawer.undo()
        self.drawer.penup()
        self.drawer.setpos(-45, 190)
        self.drawer.write(self.current_score, font=("Arial", 23, "bold"))

    def total_draw(self, time) :
        if not self.is_total_done :
            self.current_score += time.time_score()
            self.is_total_done = True

# 사용자 거북이
class ManualMover(turtle.RawTurtle):
    def __init__(self, canvas, time):
        super().__init__(canvas)
        self.origin_move = 5
        self.step_move = 5
        self.step_turn = 10
        self.time = time
        self.canvas = canvas

        self.canvas.onkeypress(lambda: self.forward(self.step_move), 'Up')
        self.canvas.onkeypress(lambda: self.backward(self.step_move), 'Down')
        self.canvas.onkeypress(lambda: (self.left(self.step_turn)), 'Left')
        self.canvas.onkeypress(lambda: (self.right(self.step_turn)), 'Right')
        self.canvas.listen()

    def original_state(self) :
        self.color("#6B9900")
        self.step_move = self.origin_move

# AI 거북이
class RandomMover(turtle.RawTurtle):
    def __init__(self, canvas, time, step_move = 20, step_turn = 10):
        super().__init__(canvas)
        self.step_move = step_move
        self.step_turn = step_turn
        self.time = time
        self.ph = 150

        # Win 인스턴스
        self.win = Win(self, self.time, canvas)

    # 일반 거북이 (easy 모드)
    def run_ai(self):
        self.screen_limit()
        mode = random.randint(0, 2)
        if mode == 0:
            self.forward(self.step_move)
        elif mode == 1:
            self.left(self.step_turn)
        elif mode == 2:
            self.right(self.step_turn)

    # 약간 똑똑한 거북이 (hard 모드)
    def run_smart_ai(self, opp_turtle, opp_heading) :
        self.step_move = 30
        self.screen_limit()
        distance = self.distance(opp_turtle)
        if distance > 150 :
            mode = random.randint(0, 2)
            if mode == 0:
                self.forward(self.step_move)
            elif mode == 1:
                self.left(self.step_turn)
            elif mode == 2:
                self.right(self.step_turn)
        # 유저와의 거리가 일정 거리 이하로 가까워질 경우 유저의 방향 고려하여 방향 설정
        else :
            mode = random.randint(0, 1)
            degree = random.randint(opp_heading - 90, opp_heading + 90)
            if mode == 0:
                self.forward(self.step_move)
            else :
                self.setheading(degree)

    # 화면 밖으로 나가지 못하도록 하는 함수
    def screen_limit(self) :
        screen_range = 240
        if (self.xcor() > screen_range) or (self.xcor() < -screen_range) or (self.ycor() > screen_range) or (self.ycor() < -screen_range):
            self.setheading(self.towards(0, 0) + random.randint(-90, 90))
            self.forward(30)

    # 공격당했을 때 함수
    def attacked(self) :
        if self.ph > 0 :
            self.ph -= 5
            self.color("#FFFFFF")
            self.color("#008299")
        else :
            self.win.draw_end_screen()

# 아이템 상위 클래스
class Item :
    def __init__(self, game) :
        self.game = game
        self.canvas = self.game.canvas
        self.img = ""

    def item_generate(self) :
        self.drawer = turtle.RawTurtle(self.canvas)
        self.drawer.hideturtle()
        self.drawer.penup()      
        self.drawer.setpos(random.randrange(-200,201), random.randrange(-200,201)) 
        self.drawer.shape(self.img)
        self.drawer.showturtle()

    def item_func(self) :
        self.drawer.hideturtle()

# 아이템 - 사과
class ItemApple(Item) :
    def __init__(self, game) :
        super().__init__(game)
        self.img = "image/apple.gif"
        self.apple_score = 20

    def item_generate(self) :
        super().item_generate()

    def item_func(self) :
        self.game.score.current_score += self.apple_score
        super().item_func()

# 아이템 - 스피드
class ItemSpeed(Item) :
    def __init__(self, game) :
        super().__init__(game)
        self.img = "image/speed.gif"

    def item_generate(self) :
        super().item_generate()

    def item_func(self) :
        self.game.chaser.color("#FF0000")
        self.game.chaser.step_move = 15
        self.game.speed_start_time = self.game.time.current_time
        super().item_func()

# 게임 첫 시작 화면 (게임 방법)
class GameIntro :
    def __init__(self, canvas) :
        self.canvas = canvas
        self.game = None

        self.manual = turtle.RawTurtle(self.canvas)
        self.manual.penup()      
        self.manual.setpos(20, 10) 
        self.manual.shape("image/game_intro.gif")
        self.easy_button = turtle.RawTurtle(self.canvas)
        self.easy_button.penup()
        self.easy_button.setpos(-80, -180) 
        self.easy_button.shape("image/easy.gif")
        self.hard_button = turtle.RawTurtle(self.canvas)
        self.hard_button.penup()
        self.hard_button.setpos(90, -180) 
        self.hard_button.shape("image/hard.gif")

    # 버튼 클릭 이벤트
    def on_mouse_click(self, x, y) :
        if (x > -130) and (x < -30) and (y > -200) and (y < -160) :
            self.game_start("easy")
        elif (x > 40) and (x < 150) and (y > -200) and (y < -160) :
            self.game_start("hard")

    # 버튼 클릭 이벤트로부터 mode를 받고 게임을 시작하는 함수
    def game_start(self, mode) :
        self.manual.hideturtle()
        self.easy_button.hideturtle()
        self.hard_button.hideturtle()
        if self.game is None :
            self.time = Timer(screen)
            self.game = RunawayGame(screen, mode, self.time)
            self.time.update_time()
            self.game.start()


# 메인 함수
if __name__ == '__main__':

    root = tk.Tk()
    canvas = tk.Canvas(root, width = 500, height = 500)
    canvas.pack()
    screen = turtle.TurtleScreen(canvas)
    root.title("Turtle Runaway")
    root.iconphoto(True, tk.PhotoImage(file = "image/green_turtle.png"))

    screen.bgpic("image/background2.png")
    screen.addshape("image/game_intro.gif")
    screen.addshape("image/fail.gif")
    screen.addshape("image/success.gif")
    screen.addshape("image/apple.gif")
    screen.addshape("image/speed.gif")
    screen.addshape("image/easy.gif")
    screen.addshape("image/hard.gif")

    # 게임 시작
    game_intro = GameIntro(screen)
    screen.onscreenclick(game_intro.on_mouse_click)

    screen.mainloop()