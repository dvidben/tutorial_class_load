from abc import ABC, abstractmethod

class BasePlugin(ABC):
    @abstractmethod
    def setup(self):
        pass
    
    @abstractmethod
    def step_1(self):
        pass

    @abstractmethod
    def step_2(self):
        pass

    @abstractmethod
    def teardown(self):
        pass