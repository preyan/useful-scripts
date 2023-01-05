import pyautogui
import time

# Disable the FAILSAFE feature to prevent pyautogui from
# exiting when the mouse is moved to the upper left corner
# of the screen.
pyautogui.FAILSAFE = False

while True:
    # Sleep for 15 seconds to avoid moving the mouse or
    # pressing the key too frequently
    time.sleep(15)
    
    # Move the mouse cursor to a specific location
    pyautogui.moveTo(500, 500)
    
    # Press the shift key
    pyautogui.press('shift')
