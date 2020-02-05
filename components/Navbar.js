import Link from 'next/link';
import React, { Component } from 'react';


// component for testing purposes, please rewrite this
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav>
                <div>
                    <Link href="/api/listURP">
                        <a title="Get one URP">Get URP</a>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;
