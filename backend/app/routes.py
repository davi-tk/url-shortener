from fastapi import APIRouter
from .models import Url
from .config import url_collection
from .schemas import original_url_data, shortened_url_data

router = APIRouter()

@router.post('/url')
async def create_shortened_url(url : str):

    url_data = Url(
        original_url=url
    )

    result = await url_collection.insert_one(url_data.model_dump())
    return shortened_url_data(url_data, id = result.inserted_id)

@router.get('/url')
async def get_url(shortened_url : str):
    url : Url = await url_collection.find_one({'shortened_url' : shortened_url})

    if url:
        return original_url_data(url)
    
    raise HTTPException(status_code=404, detail="Shortened URL not found")