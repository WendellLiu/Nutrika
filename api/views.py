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
        request_data = {k: v[0]
                        for k, v in request.POST.dict().items()}
        for k in request_data:
            if '100g' in k:
                request_data[k] = float(request_data[k])
        request_data['piece_weight'] = float(request_data['piece_weight'])

        if request_data['convert']:
            for k, v in request_data.items():
                if '100g' in k:
                    request_data[k] /= request_data['piece_weight']
        request_data.pop('convert')

        nutrition = Nutrition(**request_data)
        nutrition.save()

        serializer = NutritionSerializer(nutrition, many=False)
        return Response(serializer.data)
