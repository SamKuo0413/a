radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        grade()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級, 0, 1)
    } else if (receivedNumber == 1) {
        dataStreamer.writeNumberArray([
        科目代碼,
        年級,
        班級十位數,
        班級個位數,
        座號十位數,
        座號個位數
        ])
        dataStreamer.writeLine()
        basic.pause(2000)
        grade()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級, 0, 1)
    }
})
function seat_1 () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key4)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key5)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key6)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key7)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key8)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key9)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key0)) {
        座號十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(0, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
function cls_2 () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key4)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key5)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key6)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key7)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key8)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key9)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key0)) {
        班級個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(0, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
input.onButtonPressed(Button.A, function () {
    切換 += 1
})
function box_number () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        箱子代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        箱子代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        箱子代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
function grade () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key4)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key5)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key6)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key7)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key8)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key9)) {
        年級 = keyboard.keyBasic()
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
function seat_2 () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key4)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key5)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key6)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key7)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key8)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key9)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key0)) {
        座號個位數 = keyboard.keyBasic()
        keyboard.setIndexColor(0, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
function cls_1 () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key4)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key5)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key6)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key7)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key8)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key9)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key0)) {
        班級十位數 = keyboard.keyBasic()
        keyboard.setIndexColor(0, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
input.onButtonPressed(Button.B, function () {
    切換 += -1
    if (切換 == 0) {
        切換 = 1
    }
})
function subject_number () {
    if (keyboard.keyPressed(KeyValue.key1)) {
        科目代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key2)) {
        科目代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key3)) {
        科目代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key4)) {
        科目代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    } else if (keyboard.keyPressed(KeyValue.key5)) {
        科目代碼 = keyboard.keyBasic()
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
}
let 科目代碼 = 0
let 箱子代碼 = 0
let 座號個位數 = 0
let 座號十位數 = 0
let 班級個位數 = 0
let 班級十位數 = 0
let 年級 = 0
let 切換 = 0
dataStreamer.setBaudRate(BaudRate.BaudRate9600)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
radio.setGroup(1)
radio.setTransmitPower(7)
ESP8266_IoT.connectWifi("your_ssid", "your_pwd")
ESP8266_IoT.connectThingSpeak()
切換 = 1
年級 = 0
班級十位數 = 0
班級個位數 = 0
座號十位數 = 0
座號個位數 = 0
箱子代碼 = 0
basic.forever(function () {
    if (切換 == 1) {
        grade()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級, 0, 1)
    } else if (切換 == 2) {
        cls_1()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級 + 班級十位數, 0, 1)
    } else if (切換 == 3) {
        cls_2()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級 + 班級十位數 + 班級個位數, 0, 1)
    } else if (切換 == 4) {
        seat_1()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級 + 班級十位數 + 班級個位數 + 座號十位數, 0, 1)
    } else if (切換 == 5) {
        seat_2()
        I2C_LCD1602.ShowString("Enter the class ", 0, 0)
        I2C_LCD1602.ShowString("class" + " " + 年級 + 班級十位數 + 班級個位數 + 座號十位數 + 座號個位數, 0, 1)
    } else if (切換 == 6) {
        box_number()
        I2C_LCD1602.ShowString("Enter box number", 0, 0)
        I2C_LCD1602.ShowString("number" + " " + 箱子代碼 + "            ", 0, 1)
    } else if (切換 == 7) {
        subject_number()
        I2C_LCD1602.ShowString("Enter subject     ", 0, 0)
        I2C_LCD1602.ShowString("subject" + " " + 科目代碼, 0, 1)
    } else if (切換 == 8) {
        I2C_LCD1602.ShowString("put in your      ", 0, 0)
        I2C_LCD1602.ShowString("homework         ", 0, 1)
        radio.sendNumber(箱子代碼)
    }
})
