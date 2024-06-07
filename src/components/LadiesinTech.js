import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import AutonomousRobot from '../images/AutonomousRobot.jpeg';
import BluetoothCar from '../images/BluetoothCar.jpg';

const LadiesinTech = () => {
  const [buttonText, setButtonText] = useState('Copy Code');

  const autonomousrobotcode = `
  // Motor control pins
  const int AIN1 = 13;
  const int AIN2 = 12;
  const int PWMA = 11;
  
  const int PWMB = 10;
  const int BIN2 = 9;
  const int BIN1 = 8;
  
  // IR Sensor pin
  const int IR_SENSOR_PIN = 6;
  
  // Constants for motor control
  const int MOTOR_SPEED = 1000; // Adjust as needed
  const int DRIVE_TIME = 20;   // Adjust for accurate movement
  const int TURN_TIME = 9;     // Adjust for accurate turns
  
  void setup() {
    pinMode(IR_SENSOR_PIN, INPUT);    // IR sensor input pin
    pinMode(AIN1, OUTPUT);
    pinMode(AIN2, OUTPUT);
    pinMode(PWMA, OUTPUT);
    pinMode(BIN1, OUTPUT);
    pinMode(BIN2, OUTPUT);
    pinMode(PWMB, OUTPUT);
  
    Serial.begin(9600);
    Serial.println("Robot started - moving forward");
  
    // Initially start moving forward
    driveForward();
  }
  
  void loop() {
    // Check if obstacle detected by IR sensor
    if (digitalRead(IR_SENSOR_PIN) == HIGH) {
      // No obstacle detected, continue moving forward
      driveForward();
    }
  
    else if(digitalRead(IR_SENSOR_PIN) == LOW){
      stopMotors();
      delay(1000);
      turnRight();
      delay(1000); // Delay for turn (adjust as needed)
      driveForward(); 
  
    }
      
     else {
      // Obstacle detected, stop and turn right (adjust behavior as needed)
      stopMotors();
      delay(1000);
      turnRight();
      delay(1000); // Delay for turn (adjust as needed)
      driveForward(); 
  
    }
  }
  
  void driveForward() {
    rightMotor(MOTOR_SPEED);
    leftMotor(-MOTOR_SPEED);
  }
  
  void turnRight() {
    rightMotor(MOTOR_SPEED);
    leftMotor(MOTOR_SPEED);
    delay(TURN_TIME); // Adjust as needed for turn duration
  }
  
  void stopMotors() {
    rightMotor(0);
    leftMotor(0);
  }
  
  void rightMotor(int motorSpeed) {
    if (motorSpeed > 0) {
      digitalWrite(AIN1, HIGH);
      digitalWrite(AIN2, LOW);
    } else if (motorSpeed < 0) {
      digitalWrite(AIN1, LOW);
      digitalWrite(AIN2, HIGH);
    } else {
      digitalWrite(AIN1, LOW);
      digitalWrite(AIN2, LOW);
    }
    analogWrite(PWMA, abs(motorSpeed));
  }
  
  void leftMotor(int motorSpeed) {
    if (motorSpeed > 0) {
      digitalWrite(BIN1, HIGH);
      digitalWrite(BIN2, LOW);
    } else if (motorSpeed < 0) {
      digitalWrite(BIN1, LOW);
      digitalWrite(BIN2, HIGH);
    } else {
      digitalWrite(BIN1, LOW);
      digitalWrite(BIN2, LOW);
    }
    analogWrite(PWMB, abs(motorSpeed));
  }  
  `;

  const bluetoothcar = `
  #include <SoftwareSerial.h>

// Define pins for L298N motor driver
const int ENA = 5; // PWM Speed Control Pin for Motor A
const int IN1 = 12; // Motor A direction control
const int IN2 = 11; // Motor A direction control
const int IN3 = 10; // Motor B direction control
const int IN4 = 9; // Motor B direction control

// Define Bluetooth module pins
const int bluetoothTx = 2;
const int bluetoothRx = 3;

SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup() {
  // Set motor control pins as outputs
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  
  // Set the baud rate for the Bluetooth module
  bluetooth.begin(9600);
  
  // Start the serial monitor for debugging
  Serial.begin(9600);
  Serial.println("Setup complete. Waiting for commands...");
}

void loop() {

  while (bluetooth.available() == 0) {}
    char command = bluetooth.read();
    Serial.print("Command received: ");
    Serial.println(command);
    executeCommand(command);
    
  /*if (bluetooth.available() > 0) {
    char command = bluetooth.read();
    Serial.print("Command received: ");
    Serial.println(command);
    executeCommand(command);
  }*/

  // Small delay to stabilize the loop
  //delay(50);
}

void executeCommand(char command) {
  switch(command) {
    case 'F': // Forward
      Serial.println("Moving Forward");
      moveForward();
      break;
    case 'B': // Backward
      Serial.println("Moving Backward");
      moveBackward();
      break;
    case 'L': // Left
      Serial.println("Turning Left");
      moveLeft();
      break;
    case 'R': // Right
      Serial.println("Turning Right");
      moveRight();
      break;
    case 'S': // Stop
      Serial.println("Stopping");
      stopMotion();
      break;
    default:
      Serial.println("Unknown command");
      break;
  }
}

void moveForward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 255); // Full speed
}

void moveBackward() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, 255); // Full speed
}

void moveLeft() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 150); // Full speed
}

void moveRight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, 150); // Full speed
}

void stopMotion() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0); // Stop
}
  `;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyToClipboardAutonomousRobot = () => {
    navigator.clipboard.writeText(autonomousrobotcode).then(() => {
      setButtonText('Copied!');
      setTimeout(() => {
        setButtonText('Copy Code');
      }, 2000); // Reset button text after 2 seconds
    });
  };

  const copyToClipboardBluetoothCar = () => {
    navigator.clipboard.writeText(autonomousrobotcode).then(() => {
      setButtonText('Copied!');
      setTimeout(() => {
        setButtonText('Copy Code');
      }, 2000); // Reset button text after 2 seconds
    });
  };

  return (
    <div className='mb-5'>
      <div>
      <h1 className="text-3xl font-bold text-center mt-5">Autonomous Robot Vehicle</h1>
      <div className='flex justify-center mt-11 mb-10'>
        <p className="text-left w-[450px] h-auto">
          This code controls an Arduino-based robot using two DC motors and an IR sensor for obstacle detection. The robot moves forward by default, stops, pauses, and turns right when an obstacle is detected, then resumes moving forward. The code initializes motor control pins, and the loop function continuously checks the IR sensor to decide the robot's actions. See the code snippet below for detailed implementation.
        </p>
        <div>
          <img src={AutonomousRobot} alt="" className='w-[250px] h-[250px]'/>
        </div>
      </div>
      
      <div className='flex justify-center mb-4'>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={copyToClipboardAutonomousRobot}
        >
          {buttonText}
        </button>
      </div>

      <div className='flex justify-center'>
        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg px-auto md:w-[700px]">
          <pre className="whitespace-pre-wrap">
            <code className="language-cpp">{autonomousrobotcode}</code>
          </pre>
        </div>
      </div>
      </div>
      <div>
      <h1 className="text-3xl font-bold text-center mt-5">Bluetooth Controlled Vehicle</h1>
      <div className='flex justify-center mt-11 mb-10'>
        <p className="text-left w-[450px] h-auto">
        This code controls an Arduino-based robot using two DC motors and an IR sensor for obstacle detection. The robot moves forward by default, stops, pauses, and turns right when an obstacle is detected, then resumes moving forward. The code initializes motor control pins, and the loop function continuously checks the IR sensor to decide the robot's actions. See the code snippet below for detailed implementation.
        </p>
        <div>
          <img src={BluetoothCar} alt="" className='w-[250px] h-[250px]'/>
        </div>
      </div>
      
      <div className='flex justify-center mb-4'>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={copyToClipboardBluetoothCar}
        >
          {buttonText}
        </button>
      </div>

      <div className='flex justify-center'>
        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg px-auto md:w-[700px]">
          <pre className="whitespace-pre-wrap">
            <code className="language-cpp">{bluetoothcar}</code>
          </pre>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LadiesinTech;
