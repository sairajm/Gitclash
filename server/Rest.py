from bottle import route, run, request
from math import radians, cos, sin, asin, sqrt
from collections import Counter
import bottle
import json
import time
import datetime
import operator
from dateutil import parser

import pymysql
conn = None

try:
    conn = pymysql.connect(db='smartmeetingdb', user='group30', host='smartmeeting.cyrypi4sn74l.us-west-2.rds.amazonaws.com', passwd='12345678')
except:
    print "I am unable to connect to the database"

@route('/users', method='GET')
def get_users():
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        get_all = "SELECT * from `user`"
        cur.execute(get_all)
        data = cur.fetchall()
        conn.commit()
        return json.dumps({"items":data})

@route('/user', method='POST')
def create_user():
    with conn.cursor() as cur:
        insert = "INSERT into `user` (`username`, `password`, `name`, `email`, `phone`) values (%s, %s, %s, %s, %s)"
        username = request.forms.get('username')
        password = request.forms.get('password')
        name = request.forms.get('name')
        email = request.forms.get('email')
        phone = request.forms.get('phone')
        cur.execute(insert, (username, password, name, email, phone))
        conn.commit()
