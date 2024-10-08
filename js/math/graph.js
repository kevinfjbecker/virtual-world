class Graph
{
    constructor(points = [], segments = [])
    {
        this.points = points
        this.segments = segments
    }

    addPoint(point)
    {
        this.points.push(point)
    }

    addSegment(seg)
    {
        this.segments.push(seg)
    }

    containsPoint(point)
    {
        return this.points.find((p) => p.equals(point))
    }

    containsSegment(seg)
    {
        return this.segments.find((s) => s.equals(seg))
    }

    draw(ctx)
    {
        for(const seg of this.segments)
        {
            seg.draw(ctx)
        }

        for(const point of this.points)
        {
            point.draw(ctx)
        }
    }

    removeSegment(seg)
    {
        this.segments.splice(this.segments.indexOf(seg), 1)
    }

    tryAddPoint(point)
    {
        if(!this.containsPoint(point))
        {
            this.addPoint(point)
            return true
        }
        return false
    }

    tryAddSegment(seg)
    {
        if(!seg.p1.equals(seg.p2) && !this.containsSegment(seg))
        {
            this.addSegment(seg)
            return true
        }
        return false
    }
}