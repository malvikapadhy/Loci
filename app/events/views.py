# -*- coding: utf-8 -*-
'''Login blueprint views. Contains routes regarding authentication'''

import json
import os
from datetime import datetime, date
from time import time

import requests
from flask import Blueprint, Response, current_app, jsonify, request
from jwt import decode, encode

from app.decorators import authorize
from app.events.event_service import event_service
from app.events.event_repository import event_repository

events_bp = Blueprint('events', __name__,)



@events_bp.route('/adduser', methods=["GET", "POST"])
def add_users():
    email = request.get_json().get('email')
    password = request.get_json().get('password')
    name = request.get_json().get('name')
    country = request.get_json().get('country')
    city = request.get_json().get('city')
    age = request.get_json().get('age')
    event_service.add_user(email, password, name, country, city, age)
    return '', 204

@events_bp.route('/getuser', methods=["GET"])
def get_users():
    email = request.get_json().get('email')
    password = request.get_json().get('password')
    # user = event_service.get_user(email, password)
    return jsonify({"user": 'hello'})

@events_bp.route('/getproductdet', methods=["GET"])
def get_products():
    productid = request.args.get('serviceid')
    user = event_service.get_product_detail(productid)
    return jsonify(user)

@events_bp.route('/getprice', methods=["GET"])
def get_price():
    switch_on = request.args.get('switchOn')
    screen_on = request.args.get('screenOn')
    keyboard_on = request.args.get('keyboardOn')
    touch_on = request.args.get('touchpadOn')
    battery_on = request.args.get('batteryOn')
    web_on = request.args.get('webOn')
    user = event_service.get_price(switch_on, screen_on, keyboard_on, touch_on, battery_on, web_on)
    return jsonify(user)

# @events_bp.route('/trunc', methods=["GET"])
# def trunc():
#     user = event_repository.truncate()
#     return '', 204