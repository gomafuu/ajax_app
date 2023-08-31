class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end
 
  def create
    # 新たに投稿されたメモの内容を変数postに格納↓
    post = Post.create(content: params[:content])
    # 返却されるデータフォーマットをjsonmに指定
    render json:{post: post}
  end
 end