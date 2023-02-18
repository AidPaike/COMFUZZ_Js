import pymysql
from utils.config import *
from pymysql.constants import CLIENT

sql_config = dict(host=DATABASE_ADDRESS,
                  port=DATABASE_PORT,
                  user=DATABASE_USER,
                  passwd=DATABASE_PASSWORD,
                  # db='comfort',
                  db=DATABASE_NAME,
                  charset='utf8mb4',
                  client_flag=CLIENT.MULTI_STATEMENTS)


class DataBaseHandle(object):


    def __init__(self):
        self.conn = sql_config


    def createTable(self, sql):
        conn = pymysql.connect(**self.conn)
        cur = conn.cursor()
        cur.execute(sql)
        cur.close()
        conn.close()


    def selectOne(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()

        cur.execute(sql, prames)

        data = cur.fetchone()
        cur.close()
        conn.close()
        return data


    def selectall(self, sql):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        cur.execute(sql)
        data = cur.fetchall()
        cur.close()
        conn.close()
        return data


    def selectmany(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        cur.execute(sql, prames)

        data = cur.fetchmany()
        cur.close()
        conn.close()
        return data


    def insert(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql, prames)
        conn.commit()
        cur.close()
        conn.close()
        return recount


    def insertMany(self, sql, lis):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()

        recount = cur.executemany(sql, lis)
        conn.commit()
        cur.close()
        conn.close()
        return recount


    def inserts(self, sql):
        conn = pymysql.connect(**self.conn)
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()
        cur.close()
        conn.close()
        return


    def delete(self, sql):
        conn = pymysql.connect(**self.conn)
        cur = conn.cursor()
        recount = cur.execute(sql)
        conn.commit()
        cur.close()
        conn.close()
        return recount


    def deleteAll(self, sql):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql)
        conn.commit()
        cur.close()
        conn.close()
        return recount


    def update(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql, prames)
        conn.commit()
        cur.close()
        conn.close()
        return recount
