# diagramming

Be the problem described at https://docs.google.com/document/d/1yrovqPPk8AZlMdh07Zlm9MIyRjq9_rj6u7nORVsOBMQ/edit

For this problem, I assumed:

-   Shapes must have a centroid point to describe their absolute position in the canvas, where users dropped the shapes.
-   Vertices will be described as relative positions from the centroid -> centroids are (0, 0) inside the shapes.
-   Segments will be the link between two consecutive vertices in the array.
-   When shapes are moved, we only need to recalculate their centroid's position.
-   When polygons (at least 3 vertices) are resized, we need to recalculate their vertices position multiplying then by the percentage argument
    -   All values will be rounded and the positions should be integer (the canvas will have only integer positions).
    -   Percentages between 0 and 1 means decrease of size, while percentages greater than 1 means increase of size.
-   When a circle is resized, we need to recalculate its radio length.
-   Connectors will only exist when connected to two shapes, and when a shape is deleted, all its connectors are also deleted.
-   For the arrow connectors, we assumed their direction from Shape A to Shape B.
-   The meaning of “contained” for multi-selection will be considered all shapes whose centroids are inside the range (just to simplify the search).
-   The first chosen strategy to find out which shapes are within the multi-selection range was the simplest:
    test each shape in the array if their centroids are within the range, without using any index
    -   start = left-top and stop = right-bottom -> (startX <= x <= stopX) and (startY >= y >= stopY).

Next steps:

-   Document all API using Swagger.
-   Develop different strategies to search for polygons inside the region in the multi-selection range and compare then with the original using the JMeter script
    -   The second strategy will be create an index for one of the coordinates (x or y), using a tree. For all polygons within the range, the second coordinate should be tested.
    -   The third strategy will be create indexes for both coordinates (x and y) and make the intersection between the arrays found for both axis.
-   Develop a WebSocket (using "ws" library) protocol to replace the Express Rest APIs
    -   All users will be registered as observers and the backend will return the current state (InMemoryMapRepository class instance) in their first request.
    -   For all changes in the state, all observers will be notified.

To execute this project:

-   install: npm install
-   start: npm run start -> will be executed at localhost:4000 (port can be changed in the .env file)
-   execute all tests: npm run test
-   get tests coverage: npm run test:coverage
-   execute JMeter script using JMeter 3.5
