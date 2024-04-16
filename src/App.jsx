import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar from './component/SideBar';
import './App.css';
import { useState } from 'react';
import PostList from './component/PostList';
import PostListProvider from './store/post-list-store';
import CreatePost from './component/CreatePost';
import About from './component/About';

const app = () => {
    const [sidebarItem, setSideBarItem]= useState('Create Post');
    return <>
        <PostListProvider>
            <div className="main-contenar">
                <SideBar sidebarItem = {sidebarItem} setSideBarItem = {setSideBarItem}></SideBar>
                <div className="contenar">
                    <Header></Header>
                    {sidebarItem === 'Home' && <PostList></PostList>}
                    {sidebarItem === 'Create Post' && <CreatePost></CreatePost>}
                    {sidebarItem === 'Setting' && console.log('Setting is not working yet')}
                    {sidebarItem === 'About' &&  <About/>}
                    {/* ADD MORE SIDE BAR ITEMS CONDITION */}
                    {/* ADD MORE SIDE BAR ITEMS CONDITION */}
                    <Footer></Footer>
                </div>
            </div>
        </PostListProvider>

    </>;

}

export default app;