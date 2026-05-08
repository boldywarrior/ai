from fastapi import FastAPI, Request
from slowapi import Limiter
from slowapi.util import get_remote_address
from agent import ask_ai

app = FastAPI()
limiter = Limiter(key_func=get_remote_address)

@app.post('/api/chat')
@limiter.limit('20/minute')
async def chat(req: Request):
    data = await req.json()
    return {"reply": ask_ai(data['text'])}