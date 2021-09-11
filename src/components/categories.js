import React from 'react'
import '../css/reset.css'
import '../css/categories.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Categories = ({ setCategory, categories, activeCategory }) => {
    return(
        
            <div className=" col-3 offset-9 p-0">
                <select value={activeCategory}
                onChange={(e) => setCategory(e.target.value)}
                className="form-select float-right">
                <option value="">---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
                </select>
            </div>
     
    )
}

export default Categories