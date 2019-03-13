const int IN1 = 8;
const int IN2 = 7;
const int ENA = 9;

const int IN3 = 5;
const int IN4 = 4;
const int ENB = 6;

const int trigLeft = 13;
const int echoLeft = 12;
float pingTimeLeft;

const int trigRight = 11;
const int echoRight = 10;
float pingTimeRight;

const float lengthOfPingTime = 25000;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);

  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENB, OUTPUT);  

  pinMode(trigLeft, OUTPUT);
  pinMode(echoLeft, INPUT);
  
  pinMode(trigRight, OUTPUT);
  pinMode(echoRight, INPUT);
}

void loop() {
  writeToTrigPin(trigLeft);
  pingTimeLeft = pulseIn(echoLeft, HIGH, lengthOfPingTime);

  writeToTrigPin(trigRight);
  pingTimeRight = pulseIn(echoRight, HIGH, lengthOfPingTime);

  float leftInput = 155 - scaleTime(pingTimeLeft);
  float rightInput = 155 - scaleTime(pingTimeRight);

//Left Wheel
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, leftInput);

//Right wheel
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, rightInput);
  
  delay(1000);
}

void writeToTrigPin(int pin) {
  digitalWrite(pin, LOW);
  delayMicroseconds(2000);
  digitalWrite(pin, HIGH);
  delayMicroseconds(15);
  digitalWrite(pin, LOW);
  delayMicroseconds(10);
}

int scaleTime(float value) {
  return (value / lengthOfPingTime) * 255;
}


