# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import GoodsModel,Cart,Order
from .Serializers import GoodSerializer,CartSerializer,OrderSerializer
import json
import datetime
# Create your views here.
def render_html(request):
    return render(request, 'index.html')  #很简单，返回一个html页面


@api_view(['GET'])
def good_list(request):

    if request.method == 'GET':
        serializer = GoodSerializer(GoodsModel.objects.all(),many=True)
        return Response(serializer.data)

@api_view(['GET'])
def cart_list(request):
    if request.method == 'GET':
        params = request.query_params
        #print params['username']
        serializer = CartSerializer(Cart.objects.filter(username=params['username']),many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_order(request):
    if request.method == 'GET':
        params = request.query_params
        #print params['username']
        serializer = OrderSerializer(Order.objects.filter(username=params['username']),many=True)
        return Response(serializer.data)

@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        data = json.load(request.POST)
        obj = Order.objects.create(username=data["username"])
        goods = data["goods"]
        for good in goods:
            obj.goods.add(GoodsModel.objects.get(id=good["good_id"]))
        serializer =  OrderSerializer(obj)
        return Response(serializer.data)


@api_view(['POST'])
def add_cart(request):
    if request.method == 'POST':
        data = json.load(request.POST)
        username=data["username"]
        goods = data["goods"]

        for good in goods:
            Cart.objects.create(username=username,good=good["id"],number=good["number"])
        obj = Cart.objects.filter(username=username)
        serializer = CartSerializer(obj,many=True)
        return Response(serializer.data)


@api_view(['POST'])
def remove_cart(request):
    if request.method == 'POST':
        data = json.load(request.POST)
        username=data["username"]
        goods = data["goods"]

        for good in goods:
            Cart.objects.get(username=username,good=good["id"]).delete()
        obj = Cart.objects.filter(username=username)
        serializer = CartSerializer(obj,many=True)
        return Response(serializer.data)

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        data = json.load(request.POST)
        username=data["username"]
        psd = data["password"]

        User.objects.create_user(username=username,password=psd)
            #Cart.objects.get(username=username,good=good["id"]).delete()
        #obj = Cart.objects.filter(username=username)
        #serializer = CartSerializer(obj,many=True)
        return Response()
