class Password {
  upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerChars = "abcdefghijklmnopqrstuvwxyz";
  digits = "0123456789";
  specialChars = '~`!@#$%^&*(){}[]-+=_?/.,:;<>"';
  funnyPasswords = [
    "Banana123!",
    "SquirrelPants42",
    "PizzaIsLife$$",
    "UnicornRainbow77",
    "GigglesAndSnorts",
    "ChocoLover$",
    "NachoAveragePassword",
    "CouchPotato99",
    "PenguinDance#",
    "SpaghettiMonster666",
  ];

  constructor(len) {
    this._len = len;
    this._pass = "";
  }

  get pass() {
    return this._pass;
  }

  set pass(val) {
    this._pass = val;
  }

  get len() {
    return this._len;
  }

  set len(val) {
    this._len = val;
  }
}

class SuperStrongPassword extends Password {
  constructor(len) {
    super(len);
  }
  generatePassword() {
    let i = 0;
    while (i < super.len) {
      super.pass +=
        this.upperChars[Math.floor(Math.random() * this.upperChars.length)];
      super.pass +=
        this.lowerChars[Math.floor(Math.random() * this.lowerChars.length)];
      super.pass += this.digits[Math.floor(Math.random() * this.digits.length)];
      super.pass +=
        this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
      i += 4;
    }
    super.pass = super.pass.substring(0, super.len);
    return super.pass;
  }

  get pass() {
    return super.pass;
  }
}
class StrongPassword extends Password {
  constructor(len) {
    super(len);
  }
  generatePassword() {
    let i = 0;
    while (i < this._len) {
      super.pass +=
        this.upperChars[Math.floor(Math.random() * this.upperChars.length)];
      super.pass +=
        this.lowerChars[Math.floor(Math.random() * this.lowerChars.length)];
      super.pass += this.digits[Math.floor(Math.random() * this.digits.length)];
      i += 3;
    }
    super.pass = super.pass.substring(0, super.len);
    return super.pass;
  }

  get pass() {
    return super.pass;
  }
}
class WeakPassword extends Password {
  constructor(len) {
    super(len);
  }
  generatePassword() {
    let i = 0;
    while (i < this._len) {
      super.pass +=
        this.upperChars[Math.floor(Math.random() * this.upperChars.length)];
      super.pass +=
        this.lowerChars[Math.floor(Math.random() * this.lowerChars.length)];
      i += 2;
    }
    super.pass = super.pass.substring(0, super.len);
    return super.pass;
  }

  get pass() {
    return super.pass;
  }
}
class FunnyPassword extends Password {
  constructor(len) {
    super(len);
  }
  generatePassword() {
    super.pass +=
      this.funnyPasswords[
        Math.floor(Math.random() * this.funnyPasswords.length)
      ];
    return super.pass;
  }

  get pass() {
    return super.pass;
  }
}

let generate = document.getElementById("generate");
let display = document.getElementById("display");
let len = document.getElementById("length");
let lengthValue = document.getElementById("length-display");
len.addEventListener("input", () => {
  lengthValue.textContent = len.value;
});
generate.addEventListener("click", () => {
  let length = document.getElementById("length").value;

  let superStrong;
  let strong;
  let weak;
  let funny;
  if (length < 3) {
    display.value = "Length Should Be Greater Than 3";
  } else {
    if (checkBox() !== null) {
      if (checkBox().id === "veryStrong") {
        superStrong = new SuperStrongPassword(length);
        display.value = superStrong.generatePassword(length);
      }
      if (checkBox().id === "strong") {
        strong = new StrongPassword(length);
        display.value = strong.generatePassword(length);
      }
      if (checkBox().id === "weak") {
        weak = new WeakPassword(length);
        display.value = weak.generatePassword(length);
      }
      if (checkBox().id === "funny") {
        funny = new FunnyPassword(length);
        display.value = funny.generatePassword(length);
      }
    } else {
      display.value = "Select Intensity of Password";
    }
  }
});

function checkBox() {
  let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  for (const checkBox of checkBoxes) {
    if (checkBox.checked) {
      return checkBox;
    }
  }
  return null;
}

let copyBtn = document.getElementById("copy");

//Copy Button

copy.addEventListener("click", () => {
  if (display.value == "") {
    display.value = "Generate Password To Copy";
  } else {
    textCopy = display.value;
    navigator.clipboard.writeText(textCopy);
    alert(textCopy + " " + "Is Copied To ClipBoard");
  }
});

//Reload Btn

let refreshBtn = document.getElementById("reload");

refreshBtn.addEventListener("click", () => {
  display.value = "";
});
