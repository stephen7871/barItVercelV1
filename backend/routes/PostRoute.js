// import express from 'express';
//const express = require('express');


const {getPosts, getPost, createPost, deletePost} = require("../controllers/univPostControllers");



const router = require("express").Router();


router.route("/").get(getPosts);
//router.get('/', getPosts);
// router.get('/', getUsers);
///router.post('/', createPost);
router.route("/").post(createPost);

router.route('/:id').get(getPost);
/// router.get('/:id', getPost);
//router.patch('/:id', updatePost);
router.route('/:id').delete(deletePost);

module.exports = router;