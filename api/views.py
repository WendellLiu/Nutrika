from django.shortcuts import render
from .models import Nutrition
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NutritionSerializer

# Create your views here.

class NutritionJson(APIView):
    """
    export all nutrition data for json form
    """

    @staticmethod
    def get(request):
        name = request.GET.get('name')
        nutrition_list = Nutrition.objects.all()

        serializer = NutritionSerializer(nutrition_list, many=True)

        return Response(serializer.data)
