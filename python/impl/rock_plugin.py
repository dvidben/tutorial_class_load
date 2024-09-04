from base_plugin import BasePlugin

class RockPlugin(BasePlugin):
    def setup(self):
        print("Get ready, setting up...") 
    
    def step_1(self):
        print("Setting volume and bass for rock!")

    def step_2(self):
        print("Playing rock")

    def teardown(self):
        print("Volume down, stop rock")