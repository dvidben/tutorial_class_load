from base_plugin import BasePlugin

class JazzPlugin(BasePlugin):
    state: int

    def setup(self):
        print("Relax, setting up...") 
        self.state = 1
    
    def step_1(self):
        print("Fine tunning equalizer")

    def step_2(self):
        print("Playing jazz")

    def teardown(self):
        print("Volume down, stop jazz")

