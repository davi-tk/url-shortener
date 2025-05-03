from pydantic import BaseModel, Field
from datetime import datetime
import random
import string

SHORTENED_URL_LEN = 6

def generate_random_string():
    characters = string.ascii_letters + string.digits
    random_string = ''.join(random.choice(characters) for _ in range(SHORTENED_URL_LEN))
    return random_string

class Url(BaseModel):
    original_url : str
    shortened_url : str = Field(default_factory=generate_random_string)
    created_at : datetime = Field(default_factory=datetime.now)