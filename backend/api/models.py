# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import
import cPickle as pickle

from django.db import models
from django.contrib.auth.models import User



class GoodsModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    good_id = models.IntegerField(primary_key=True, db_column='GId')
    book = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    published = models.CharField(max_length=100)
    sales = models.IntegerField()

class Cart(models.Model):
    username = models.CharField(max_length=100)
    good = models.ForeignKey("GoodsModel")
    number = models.IntegerField()
    class Meta:
        unique_together=("username","good")

class Order(models.Model):
    id = models.IntegerField(primary_key=True, db_column='OId')
    username = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    goods = models.ManyToManyField("GoodsModel")
