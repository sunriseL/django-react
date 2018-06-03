#coding:utf-8#
from django.conf.urls import url
from rest_framework.authtoken import views as drf_views
from api.views import good_list,cart_list
urlpatterns = [
    url(r'goods/',good_list),
    url(r'cart/',cart_list),
    url(r'^auth$', drf_views.obtain_auth_token, name='auth')
]
