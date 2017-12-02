from bottle import route, run, request
# from math import radians, cos, sin, asin, sqrt
# from collections import Counter
import bottle
import json
import time
# import datetime
# import operator
# from dateutil import parser

import pymysql
conn = None

# CREATE TABLE app_user (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username CHAR(25), auth_token CHAR(100), points INT(9), streak INT(9), group_id INT(5), active BIT);
# CREATE TABLE bets (group_id INT(5), bet_by CHAR(25), bet_on CHAR(25), bet INT(9));

try:
    conn = pymysql.connect(db='gitclash', user='root', host='10.2.66.49', passwd='password')
except:
    print "I am unable to connect to the database"

@route('/hello', method='GET')
def get_users():
    return json.dumps({"message": "hello-world"})

@route('/users', method='GET')
def get_users():
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        get_all = "SELECT * from `app_user`"
        cur.execute(get_all)
        data = cur.fetchall()
        conn.commit()
        return json.dumps({"items":data})

@route('/user', method='POST')
def create_user():
    with conn.cursor() as cur:
        insert = "INSERT into `app_user` (`username`, `auth_token`, `points`, `streak`, `group_id`, `active`) values (%s, %s, %s, %s, %s, %s)"
        username = request.forms.get('uname')
        # password = request.forms.get('auth_token')
        cur.execute(insert, (username, 'dummy_auth_token', 0, 0, 1, 1))
        conn.commit()

run(host='localhost', port=8080)
