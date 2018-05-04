# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import
import cPickle as pickle

from django.db import models
from django.contrib.auth.models import User


class SerializedField(models.TextField):

    """序列化域
    用 pickle 来实现存储 Python 对象
    """
    __metaclass__ = models.SubfieldBase  # 必须指定该 metaclass 才能使用 to_python

    def validate(self, val):
        raise isinstance(val, basestring)

    def to_python(self, val):
        """从数据库中取出字符串，解析为 python 对象"""
        if val and isinstance(val, unicode):
            return pickle.loads(val.encode('utf-8'))

        return val

    def get_prep_value(self, val):
        """将 python object 存入数据库"""
        return pickle.dumps(val)


class GoodsModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    good_id = models.IntegerField(primary_key=True, db_column='GId')
    book = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    published = models.CharField(max_length=100)
    sales = models.IntergerField()
