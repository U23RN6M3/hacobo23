title_screen = document.getElementById("title-screen")
select_gamemode = document.getElementById("select-gamemode")
canvas1 = document.getElementById("canvas1")
click_sfx = new Audio("Audio/click.wav")

function play_clicked() {
    title_screen.style.display = "none"
    select_gamemode.style.display = "flex"
    click_sfx.play()
}

function single_player() {
    title_screen.style.display = "none"
    select_gamemode.style.display = "none"
    canvas1.style.display = "block"
    click_sfx.play()
    start()
}

class Player {
    constructor() {
        
    }
}

function start() {
    ctx = canvas1.getContext("2d")
    canvas1.width = screen.width
    canvas1.height = screen.height
    canvas1.style.backgroundColor = "red"
}
