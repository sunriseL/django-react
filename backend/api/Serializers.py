from __future__ import unicode_literals, absolute_import
import json

from django.contrib.auth.models import User
from rest_framework import serializers

from api.models import GoodsModel,Cart,Order


class GoodSerializer(serializers.ModelSerializer):
     class Meta:
         model = GoodsModel
         fields = ('created_at', 'good_id', 'book', 'author', 'language', 'published','sales')

class CartSerializer(serializers.ModelSerializer):
     class Meta:
         model = Cart
         fields = ('username', 'good', 'number')

class OrderSerializer(serializers.ModelSerializer):
     class Meta:
         model = Order
         fields = ('username', 'id', 'goods')
