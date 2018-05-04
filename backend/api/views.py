# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def render_html(request):
    return render(request, 'index.html')  #很简单，返回一个html页面
