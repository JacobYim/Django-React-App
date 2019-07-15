from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
import json
from io import StringIO

@api_view(['GET'])
def hello_world(request) :
    return Response({"message":"Hello, World!"})

# @api_view(['GET'])
# def hello(request) :
#     io = StringIO()
#     content = User.objects.all()
#     # str1 = User.objects.filter(last_name='')
#     # str2 = ''.join(content.get(username = 'admin123').username) 
#     # str2 = ''.join(content.get(username = 'admin123'))
#     staff = content.filter(is_staff=True)
#     str2 = staff.values_list('username')
#     return Response({'result' : str2})
#     # https://wayhome25.github.io/django/2017/04/01/django-ep9-crud/

@api_view(['GET'])
def hello(request) :
    io = StringIO()
    content = Token.objects.all()
    # str1 = User.objects.filter(last_name='')
    # str2 = ''.join(content.get(username = 'admin123').username) 
    # str2 = ''.join(content.get(username = 'admin123'))
    # staff = content.exclude(user='')
    str2 = content.values_list('user')
    return Response({'result' : str2})
    # https://wayhome25.github.io/django/2017/04/01/django-ep9-crud/