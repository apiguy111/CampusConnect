import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    user: USERS[1].user,
    likes: 252,
    caption:
      "People who succeed at the highest level are not lucky. They’re doing something differently than everyone else. – Tony Robbins",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "nikhlesh",
        comment:
          "Looking a real fuck bro, wish you a happy vagina, The only thing that’s keeping you from getting what you want is the story you keep telling yourself",
      },
      {
        user: "ashwanikumar",
        comment: "A classic sunglass and here we go tom cruise",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    user: USERS[5].user,
    likes: 168,
    caption:
      "Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen. – Deep Roy",
    profile_picture: USERS[5].image,
    comments: [
      {
        user: "nikhlesh",
        comment: "Looking a real fuck bro, wish you a happy vagina",
      },
      {
        user: "ashwanikumar",
        comment: "A classic sunglass and here we go tom cruise",
      },
    ],
  },
];
