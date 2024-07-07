import React, { useState , useEffect } from "react";
import ReactMarkdown from "react-markdown";

const App = ()=>{
    const [markdown, setMarkdown] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
      }, []);

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };
    
    return(
        <div className="app">
            {loading ? (
            <p className="loading">Loading...</p>
            ) : (
            <>
                <textarea
                className="textarea"
                value={markdown}
                onChange={handleChange}
                placeholder="Write your markdown here..."
                />
                <div className="preview">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                    
                </div>
            </>
            )}
        </div>
    );
}

export default App;

