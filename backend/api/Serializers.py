from __future__ import unicode_literals, absolute_import
import json

from django.contrib.auth.models import User
from rest_framework import serializers

from .models import GoodsModel


class ProductSerializer(serializers.ModelSerializer):
     class Meta:
         model = GoodsModel
         fields = ('created', 'key', 'book', 'author', 'language', 'published','sales')
