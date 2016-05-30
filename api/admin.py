from django.contrib import admin
from .models import Nutrition

class NutritionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'trivial', 'category')
    search_fields = ('all_name',)

admin.site.register(Nutrition, NutritionAdmin)
