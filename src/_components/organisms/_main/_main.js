import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import JSONImages from '../../../images.json'
import Home from '../_home/_home';
import Contact from '../_contact/_contact';
import Gallery from '../_gallery/_gallery';
import About from '../_about/_about';
import GalleryAdmin from '../_galleryAdmin/_galleryAdmin';


const Main = () => {
  const [allImages, setAllImages] = useState([...JSONImages.images])
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" render={(props) => <Gallery allImages={allImages} />} />
      <Route path="/admin" render={(props) => <GalleryAdmin allImages={allImages} setAllImages={setAllImages} />} />
      <Route path="/aboutme" component={About} />
    </Switch>
  )
}

export default Main;
