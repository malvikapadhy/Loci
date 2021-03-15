

import json
import urllib.parse
from datetime import datetime

import requests

from app.config import AppConfig
from app.events.event_repository import event_repository
config = AppConfig()


class EventService:

    def add_user(self, email, password, name, country, city, age):
        event_repository.add_user(email, password, name, country, city, age)

    def get_user(self, email, password):
        return event_repository.get_user(email, password)

    def get_product_detail(self, productid):
        return event_repository.get_product_detail(productid)

    def get_price(self, switch_on, screen_on, keyboard_on, touch_on, battery_on, web_on):
        count = 0
        if switch_on == 'yes':
            count+=9
        if screen_on == 'yes':
            count+=0.5
        if keyboard_on == 'yes':
            count+=0.1
        if touch_on == 'yes':
            count+=0.3
        if battery_on =="yes":
            count+=0.2
        if web_on == 'yes':
            count+=0.4
        base_price = 200
        totalPrice = base_price * count
        return {'price': int(totalPrice)}


event_service = EventService()
