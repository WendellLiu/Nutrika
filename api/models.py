# coding=utf-8
from django.db import models

# Create your models here.

u"""
"calories_100g": 337.7443,
"carbs_100g": 69.1678,
"fat_100g": 2.565,
"protein_100g": 14.118,
"water_100g": 12.63,
"category": "穀物類",
"id": 0,
"name": "小麥",
"piece_weight": 0,
"trivial": "",
"calories_unit": 0,
"carbs_unit": 0,
"fat_unit": 0,
"protein_unit": 0,
"water_unit": 0
"""


class Nutrition(models.Model):
    calories_100g = models.FloatField(default=0)
    carbs_100g = models.FloatField(default=0)
    fat_100g = models.FloatField(default=0)
    protein_100g = models.FloatField(default=0)
    water_100g = models.FloatField(default=0)
    piece_weight = models.FloatField(default=0)
    calories_unit = models.FloatField(default=0)
    carbs_unit = models.FloatField(default=0)
    fat_unit = models.FloatField(default=0)
    water_unit = models.FloatField(default=0)
    protein_unit = models.FloatField(default=0)
    name = models.CharField(max_length=200)
    trivial = models.CharField(blank=True, max_length=200)
    category = models.CharField(max_length=200)
