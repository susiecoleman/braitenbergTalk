# Braitenberg Vehicle - Loving Behaviour
# Designed to be run on legomindstorm ev3 running the ev3dev operating system
# Uses Proximity sensors
# Inversely proportional relationship between sensor output and motor input
# Wires are uncrossed

import ev3dev.ev3 as ev3
import time

stop_button = ev3.Button()

right_sensor = ev3.InfraredSensor('in1')
right_sensor.mode = 'IR-PROX'
assert right_sensor.connected

left_sensor = ev3.InfraredSensor('in2')
left_sensor.mode = 'IR-PROX'
assert left_sensor.connected

left_motor = ev3.LargeMotor('outA')
assert left_motor.connected

right_motor = ev3.LargeMotor('outB')
assert right_motor.connected

while not stop_button.any():
    left_sensor_value = left_sensor.value() * 5
    right_sensor_value = right_sensor.value() * 5
    left_motor.run_forever(speed_sp=left_sensor_value, speed_regulation_enabled='on')
    right_motor.run_forever(speed_sp=right_sensor_value, speed_regulation_enabled='on')
    time.sleep(0.1)
