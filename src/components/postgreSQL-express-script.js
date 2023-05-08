import axios from "axios";


export const createnewblog = async item => {
  let data = {
    author: JSON.stringify({
      name: item.author.name,
      email: item.author.email,
      about: item.author.about
    }), 
    content: JSON.stringify({
      title: item.content.title,
      src: item.content.src,
      text: item.content.text
    })
  };
  let request = {
    url: "http://localhost:8080/api/comments", 
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    data: JSON.stringify(data)
  };

  const response = await axios(request);
  return response;
};

// delete blog
export const deleteblog = async item => {
  let request = {
    url: "http://localhost:8080/api/comments/" + item,
    method: "delete",
    headers: {
      "Content-type": "application/json"
    }
  };

  const response = await axios(request);
  return response;
};


export const updateblog = async item => {
  let data = {
    author: JSON.stringify({
      name: item.author.name,
      email: item.author.email,
      about: item.author.about
    }), 
    content: JSON.stringify({
      title: item.content.title,
      src: item.content.src,
      text: item.content.text
    }),
    published: item.published
  };
  let request = {
    url: "http://localhost:8080/api/comments/" + item._id, 
    method: "put",
    headers: {
      "Content-type": "application/json"
    },
    data: JSON.stringify(data)
  };

  const response = await axios(request);
  return response;
};

// get all blog
export const retriveallblog = async () => {
  let request = {
    url: "http://localhost:8080/api/comments/",
    method: "get",
    headers: {
      "Content-type": "application/json"
    }
  };

  const response = await axios(request);
  return response;
};
