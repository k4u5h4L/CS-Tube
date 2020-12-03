from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings

from rest_framework.decorators import api_view
from rest_framework.response import Response

import json

# from .serializers import TaskSerializer
# from .models import Task
from .requests import fetchYtApi

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/task-list/',
		'Detail View':'/task-detail/<str:pk>/',
		'Create':'/task-create/',
		'Update':'/task-update/<str:pk>/',
		'Delete':'/task-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def apiData(request):
	# api_data = fetchYtApi('UCXQexglLCaJyTImYLmSO9Ng')
	with open(f'{settings.BASE_DIR}/api/apiData.json') as f:
		api_data = json.load(f)


	# items_array = api_data['items']

	return Response(api_data)

