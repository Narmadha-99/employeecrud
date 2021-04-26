import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="menu-bar">
            <header className="header">
                <nav class="navbar navbar-expand-lg navbar-light">
              
                <div><a href="#" className="navbar-brand">InHouse Marketplace </a></div>
               
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>                        
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/employees"><strong>Employee</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/requirements"><strong>Requirement</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/offers"><strong>Offer</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/resources"><strong>Resources</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/proposal"><strong>Proposal</strong></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
        );
    }
}

export default HeaderComponent;
