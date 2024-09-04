import importlib
import inspect

from base_plugin import BasePlugin

def load_class(module_name) -> BasePlugin: 
    module = importlib.import_module(module_name)

    for name, obj in inspect.getmembers(module):
        is_subclass = inspect.isclass(obj) and obj is not BasePlugin and issubclass(obj, BasePlugin)
        if is_subclass:
            return obj
        
    return None

if __name__ == "__main__":
    DynamicClass = load_class('impl.rock_plugin')

    if not DynamicClass is None:
        instance = DynamicClass()
        assert isinstance(instance, BasePlugin)
        instance.setup()
        instance.step_1()
        instance.step_2()
        instance.teardown()
    else:
        raise("Class does not implement interface")