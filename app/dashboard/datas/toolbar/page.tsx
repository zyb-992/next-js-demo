'use client';

export default function App() {
    return (
        <ToolBar onPlayMovie= {() => alert('playing')}
        onUploadImage={() => alert('Uploading')}
         />
    );
}

function ToolBar({ onPlayMovie, onUploadImage }) {
    return (
        <>
            <div>  
                <Button onClick={onPlayMovie}>
                    Play Movie
                </Button>
                <Button onClick={onUploadImage}>
                    Upload Image
                </Button>
            </div>
        </>
    );
}

function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }