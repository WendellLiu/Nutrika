from django.db.models import Q

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Nutrition
from .serializers import NutritionSerializer

# Create your views here.


class NutritionJson(APIView):
    """
    export all nutrition data for json form
    """

    @staticmethod
    def get(request):
        name = request.GET.get('name')

        if name:
            nutrition_list = Nutrition.objects.filter(Q(name__contains=name) | Q(trivial__contains=name))\
                                              .filter(piece_weight__gt=0)

        else:
            nutrition_list = Nutrition.objects.all()

        serializer = NutritionSerializer(nutrition_list, many=True)

        return Response(serializer.data)

    @staticmethod
    def post(request):
        """
        Format
        {
            'convert': True,
            'name': '',
            'trivial': '',
            'category': '',
            'piece_weight': 0,
            'calories_100g': 337.7443,
            'carbs_100g': 69.1678,
            'fat_100g': 2.565,
            'protein_100g': 14.118,
            'water_100g': 12.63,
        }
        """
        request_data = NutritionJson.format_request_data(request.POST.dict())
        if request_data['convert']:
            request_data = NutritionJson.convert_to_100g(request_data)
        request_data.pop('convert')

        serializer = NutritionSerializer(data=request_data, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def put(request, pk, format=None):
        request_data = NutritionJson.format_request_data(request.POST.dict())
        if request_data['convert']:
            request_data = NutritionJson.convert_to_100g(request_data)
        request_data.pop('convert')

        nutrition = Nutrition.objects.get(id=pk)
        serializer = NutritionSerializer(nutrition, data=request_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def delete(request, pk, format=None):
        try:
            nutrition = Nutrition.objects.get(id=pk)
        except Nutrition.DoesNotExist:
            return Response()
        else:
            nutrition.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

    @staticmethod
    def format_request_data(request_data):
        for k in request_data:
            if '100g' in k:
                request_data[k] = float(request_data[k])
        request_data['piece_weight'] = float(request_data['piece_weight'])
        return request_data

    @staticmethod
    def convert_to_100g(request_data):
        for k, v in request_data.items():
            if '100g' in k:
                request_data[k] /= request_data['piece_weight']
        return request_data
