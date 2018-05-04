#coding:utf-8#
from django.conf.urls import url,include

from views import render_html

urlpatterns = [
url(r'^api', include('api.urls', namespace='api', app_name='api')),
    url(r'^$',render_html)
]
