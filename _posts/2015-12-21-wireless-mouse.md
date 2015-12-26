---
layout: post
title: "Wireless Raspberry Pi Mouse"
categories: tutorial
---
To start exploiting the linux kernel, Alex propose a simple task: create a mouse. Yup, that *simple*.
It might seem daunting at first to create such a device from scratch, but once you figure out a solution, it's just a matter of programming.

## Hardware
Because crafting an optical sensor is way beyond our capabilities, we were forced to use a more primitive way of moving the cursor on two axes: **potentiometers**, two of them. One will be for the X axis and the other for the Y axis. As for the mouse clicks, we used two **push-buttons**. We acquired all of this from an [Arduino Starter Kit](https://www.arduino.cc/en/Main/ArduinoStarterKit).

As for transmitting data, we initially wanted to use a USB cable from our mouse to the PC. But the USB standards are not that easy to implement from scratch, especially without using libraries. Also, the Raspberry Pi's USB only works in *host mode*[^1]. So, for start, we decided to use WiFi because is simpler and easier to implement. Later on we will redo this using an USB cable.

An Arduino Uno board can actually comunicate via USB, but you are constrained to some abstract functions that won't let you do much. So we used my Raspberry Pi 2. It has linux, we can attach a WiFi module to it and have it connect to a LAN computer, but what matters most, we can program in pure C. Joy.

Because the RPi does not have any analog pins, an ADC was needed. [MCP3008](https://www.adafruit.com/datasheets/MCP3008.pdf) is probably not the best choice because its poor resolution but this is all we have currently.

Here is a picture with everything mounted on a breadboard.
![WiFi-Mouse-Hardware]()

## Connection
Todo

## Kernel Module
Todo

## Final thoughts
Todo

[^1]: *Host mode* means you can connect devices to the RPi (such as keyboards memory sticks, cameras) but not the other way around (connect the RPi as a mouse to another device.
