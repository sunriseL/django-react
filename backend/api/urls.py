#coding:utf-8#
from django.conf.urls import url
from rest_framework.authtoken import views as drf_views
from api.views import good_list,cart_list,create_order,add_cart,remove_cart,register,get_order
urlpatterns = [
    url(r'create/order/',create_order),
    url(r'order/',get_order),
    url(r'add/cart/',add_cart),
    url(r'remove/cart/',remove_cart),
    url(r'goods/',good_list),
    url(r'cart/',cart_list),
    url(r'register/',register),
    url(r'^auth$', drf_views.obtain_auth_token, name='auth')
    
]
