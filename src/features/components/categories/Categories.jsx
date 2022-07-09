import React from 'react'
import './categories.css'
import { useSelector } from 'react-redux'
import { categoriesSelector } from './categoriesSlice'
import { NavLink } from 'react-router-dom'

function Categories() {

  const categories = useSelector(categoriesSelector.selectAll)

  const renderedCategories = categories.map(link => {

    // base category names......
    return <div className="category" key={link.id}>
      <NavLink to={link.link} className='category_link'>{link.name}

        {/* sub menus....... */}
        <ul className='sub_menu'>
          {
            link.hasSubMenu && (
              link.subMenu.map(menu => {
                return <li className='subMenu_List'>
                  <NavLink to={menu.link} className="subMenu_Link">{menu.name}

                    {/* sub menu images container */}
                    <div className="sub_menu_images_container">
                     <div className="img_container">
                     {
                        menu.hasSubMenu && (
                          menu.subMenu_images.map(img => {
                            return <div className={`sub_menu_img_box`}>
                            <img src={img.img} alt={img.name} />
                            <span className='img_name'>{img.name}</span>
                          </div>
                          })
                        )
                      }
                     </div>
                    </div>
                  </NavLink>
                </li>
              })
            )
          }
        </ul>
      </NavLink>
    </div>
  })

  // subMenus 
   

  return (
    <div className='categories_section'>
       {
          renderedCategories
        }
     
    </div>
  )
}

export default Categories