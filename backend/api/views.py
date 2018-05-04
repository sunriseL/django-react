# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import GoodsModel
from .Serializers import GoodSerializer
# Create your views here.
def render_html(request):
    return render(request, 'index.html')  #很简单，返回一个html页面


@api_view(['GET'])
def good_list(request):

    if request.method == 'GET':
        serializer = GoodSerializer(GoodsModel.objects.all(),many=True)
        return Response(serializer.data)
