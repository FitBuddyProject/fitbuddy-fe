import styled from "styled-components";

const AppContainer = styled.div`
    * {
        padding: 0;
        margin: 0;
    }

    #wrap {
        width: 1200px;
        height: 100vh;
        margin: 0 auto;
    }

    header {
        width: 100%;
        height: 75px;
        border: 1px solid red;
    }

    aside {
        width: 30%;
        height: 700px;
        float: left;
        border: 1px solid orange;
    }

    section {
        width: 70%;
        height: 700px;
        float: left;
        border: 1px solid green;

    }

    footer {
        width: 100%;
        height: 150px;
        clear: both;
        border: 1px solid purple;
    }


    @media (max-width: 1200px) {
        #wrap {
            width: 95%;
        }

    }
    @media (max-width: 768px) {
        #wrap {
            width: 95%;
        }
    }
    @media (max-width: 596px) {
        #wrap {
            width: 100%;
        }

        header {
            height: 100px;
        }

        footer {
            height: 100px;
        }
    }

    @media (max-width: 500px) {
        #wrap {
            width: 100%;
        }

        header {
            height: 60px;
            background-color: grey;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        aside {
            display: none;
        }
        
        section {
            width: 100%;
        }

        footer {
            height: 90px;
        }


    }

`

export default AppContainer;